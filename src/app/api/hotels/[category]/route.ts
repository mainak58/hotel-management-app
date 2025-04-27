import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { category: string } }
) {
    const { category } = params;

    const hotel = await prisma.hotel.findMany({
        where: {
            catagory: category,
        },
    });

    if (!hotel) {
        return new Response(JSON.stringify({ error: "Hotel not found" }), {
            status: 404,
        });
    }

    return new Response(JSON.stringify(hotel), { status: 200 });
}
