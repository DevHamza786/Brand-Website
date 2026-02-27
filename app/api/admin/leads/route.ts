import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

function dataPath(file: string) {
  return path.join(process.cwd(), 'data', file);
}

export async function GET() {
  try {
    const content = await fs.readFile(dataPath('leads.json'), 'utf8');
    const leads = JSON.parse(content) as unknown[];
    return NextResponse.json(leads);
  } catch {
    return NextResponse.json([]);
  }
}

