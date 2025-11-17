import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href={"/testing"}>
        <Button variant={"default"}  iconRight={Icons.arrow_arc_right}>
          Goto Testing Grounds
        </Button>
      </Link>
    </div>
  );
};

export default page;
