import {NextRequest as req, NextResponse as res} from 'next/server.js'

// set up & name routes to protect

export async function middleware(req) {
    const cookie = req.cookies.get('next-auth.session-token').value
    const payload = cookie.split(".").at(1)
    const buffer = Buffer.from(payload, "base64")
    const email = JSON.parse(buffer.toString()).email


    const response = await fetch('http://localhost:3000/api/getuser')
    // const data = await response.json()


// next-auth.session-token
}
