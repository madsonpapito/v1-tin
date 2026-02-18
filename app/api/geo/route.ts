import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const cityHeader = request.headers.get('x-vercel-ip-city');
    const city = cityHeader ? decodeURIComponent(cityHeader) : 'Unknown Location';
    return NextResponse.json({ city });
}
