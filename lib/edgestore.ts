// lib/edgestore.ts
"use client";

import { createEdgeStoreProvider } from "@edgestore/react";
import type { EdgeStoreRouter } from "@/types/edgestore"; // ✅ API route dan emas

export const { EdgeStoreProvider, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>();
