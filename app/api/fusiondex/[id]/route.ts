import { NextResponse } from "next/server";
import { POKEMON_OPTIONS, normalizePokemonName } from "@/app/data/pokemon";

const FUSIONDEX_BASE = "https://www.fusiondex.org";
const DEFAULT_TYPES = ["NONE"];
const POKEMON_ID_TO_NAME = Object.fromEntries(
  POKEMON_OPTIONS.map((pokemon) => [pokemon.value, pokemon.label]),
);

function isValidFusionId(id: string | undefined): boolean {
  return typeof id === "string" && /^\d+\.\d+$/.test(id);
}

async function getPokemonNameById(id: string): Promise<string> {
  const name = POKEMON_ID_TO_NAME[id];

  if (!name) {
    throw new Error(`No canonical Pokémon name found for dex ID ${id}.`);
  }

  return normalizePokemonName(name);
}

function normalizeFusionName(name: string): string {
  return name.replace(/-/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function extractFusionData(html: string, headName: string, bodyName: string) {
  const titleMatch = html.match(/<meta\s+name="og:title"\s+content="([^"]+)"/i);
  const imageMatch = html.match(/<meta\s+name="og:image"\s+content="([^"]+)"/i);

  const rawName = titleMatch ? titleMatch[1].replace(/\s*-\s*FusionDex$/i, "") : `${headName} + ${bodyName}`;
  const name = rawName.replace(/\s*#\d+\.\d+\s*$/i, "").trim();

  const typeSectionMatch = html.match(/<section class="types">([\s\S]*?)<\/section>/);
  const typeSection = typeSectionMatch ? typeSectionMatch[1] : "";
  const types = typeSection
    ? Array.from(
        typeSection.matchAll(/<span class="type"><span class="type-[^"]+">([A-Z]+)<\/span><\/span>/g),
        (match) => match[1],
      ).slice(0, 2)
    : DEFAULT_TYPES;

  return {
    name: name || normalizeFusionName(`${headName} ${bodyName}`),
    types: types.length > 0 ? types : DEFAULT_TYPES,
    imageUrl: imageMatch ? imageMatch[1] : "/images/egg.png",
  };
}

export async function GET(
  _request: Request,
  { params }: { params: { id: string } },
) {
  const id = params?.id;

  if (!isValidFusionId(id)) {
    return NextResponse.json({ error: "Invalid FusionDex ID." }, { status: 400 });
  }

  const [headId, bodyId] = id.split(".");

  try {
    const [headName, bodyName] = await Promise.all([
      getPokemonNameById(headId),
      getPokemonNameById(bodyId),
    ]);

    const fusionUrl = `${FUSIONDEX_BASE}/${headName}+${bodyName}/`;
    const pageResponse = await fetch(fusionUrl, {
      headers: {
        Accept: "text/html",
        "User-Agent": "InfiniteFusionTeamPlanner/1.0",
      },
    });

    if (!pageResponse.ok) {
      return NextResponse.json(
        { error: `FusionDex could not resolve ${id} at ${fusionUrl}.` },
        { status: 404 },
      );
    }

    const html = await pageResponse.text();
    const fusionData = extractFusionData(html, headName, bodyName);

    return NextResponse.json(
      {
        pokemon: {
          name: fusionData.name,
          type: fusionData.types,
        },
        sprites: [{ image_url: fusionData.imageUrl }],
      },
      {
        headers: {
          "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
        },
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Unable to resolve FusionDex species.",
      },
      { status: 502 },
    );
  }
}
