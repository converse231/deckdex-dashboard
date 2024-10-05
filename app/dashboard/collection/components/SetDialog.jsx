import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SetDialog({ data }) {
  return (
    <Dialog>
      <DialogTrigger className="w-fit bg-white font-semibold  text-sm uppercase rounded-lg flex items-center text-primary py-2 px-4 hover:bg-primary hover:text-white duration-200 transition-all">
        See all sets <ArrowRight className="icon-button ml-2" />
      </DialogTrigger>
      <DialogContent className="max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Collection Sets</DialogTitle>
        </DialogHeader>
        <div>
          <div className="relative">
            <Input className="bg-secondary" placeholder="Search for sets..." />
            <Search className="icon-button absolute right-3 top-0 translate-y-1/2" />
          </div>
          <div className="overflow-y-auto max-h-[520px] grid grid-cols-3 items-center justify-items-center gap-3 py-10">
            {" "}
            {/* Added scroll area */}
            {data.map((set, index) => (
              <Link
                href={`/dashboard/collection/${set.name}`}
                key={index}
                className="hover:bg-muted p-2 transition-all rounded-lg"
              >
                <Image
                  src={set.logo}
                  alt={set.name}
                  width={400}
                  height={300}
                  className="w-44 h-auto"
                />
              </Link>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SetDialog;
