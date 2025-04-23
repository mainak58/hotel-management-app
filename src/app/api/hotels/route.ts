import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {
        name,
        description,
        rating,
        location,
        have_spa,
        have_pool,
        image_url,
    } = body;

    try {
        const create = await prisma.hotel.create({
            data: {
                name: name,
                description: description,
                rating: rating,
                location: location,
                have_spa: have_spa,
                have_pool: have_pool,
                image_url: image_url,
            },
        });

        return NextResponse.json({ success: true, data: create });
    } catch (error) {
        return NextResponse.json(
            { message: `error in admin route ${error}` },
            { status: 400 }
        );
    }
}
