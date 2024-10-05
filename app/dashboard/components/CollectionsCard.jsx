import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import setLogo from "@/assets/set-logo.png";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

function CollectionsCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-3">Collections</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableCaption>A list of your set collections.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-full">Name</TableHead>
              <TableHead className="text-right text-nowrap">
                Completion %
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Image src={setLogo} alt="set-logo" className="h-10 w-auto" />
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="secondary">20%</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image src={setLogo} alt="set-logo" className="h-10 w-auto" />
              </TableCell>
              <TableCell className="text-right">
                {" "}
                <Badge variant="secondary">20%</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default CollectionsCard;
