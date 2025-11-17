import { Button } from "@workspace/ui/components/button";
import { Icons } from "@workspace/ui/components/icons";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        <Button
          outline={{
            color: "white",
            style: "solid",
            width: 1,
          }}
          variant={"default"}
          iconLeft={Icons.arrow_arc_left}
          iconRight={Icons.arrow_arc_right}
        >
          Buttons
        </Button>
      </div>
    </div>
  );
}
