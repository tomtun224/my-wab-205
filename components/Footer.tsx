'usr client'

import Link from "next/link";

import { Badge } from "@/components/tailgrids/core/badge";
import { Facebook, Instagram1 } from "@tailgrids/icons";

export default function Footer() {
  return (
    <>
      {/* student */}
      <div className="text-center mt-4">
        <Badge className="text-xl text-black">68083016 ชัยนันท์ ธรรมสา</Badge>
      </div>
      {/* contacts */}
      <div>
        <div className="mt-4 flex justify-center gap-6">
          <Link href={'https://www.facebook.com/profile.php?id=61591852647899'} target='_blank'>
          <Facebook className="text" />
          </Link>
          <div className="border-l"></div>
          <Instagram1/>
        </div>
      </div>
    </>
  );
}
