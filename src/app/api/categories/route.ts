import { NextResponse } from "next/server";
import getToken from "@lib/api/getToken";
import spotifyApi from "@lib/api";
import { CategoriesResponse } from "@lib/types/spotify";
import { Err } from "@lib/types/api";

const getCategories = async (): Promise<CategoriesResponse | Err> => {
  try {
    const params = { locale: "sv_SE", country: "SE" };
    const token = await getToken();
    const headers = { Authorization: token };
    const { data } = await spotifyApi.get("/browse/categories/", { headers, params });

    return data.categories;
  } catch (error) {
    console.error({ error });
    return { error: "Unexpected Response" };
  }
};

export async function GET() {
  try {
    const categories = await getCategories();
    return NextResponse.json(categories);
  } catch (error) {
    console.error({ error });
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
