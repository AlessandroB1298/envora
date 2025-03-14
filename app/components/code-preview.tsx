"use client";

import type React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import { Card } from "@/app/components/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/tabs";
import { cn } from "@/lib/utils";

interface CodePreviewProps {
  code: string;
  fileName?: string;
  className?: string;
  language?: string;
  children: React.ReactNode;
  size?: string;
}

export function CodePreview({
  code,
  fileName,
  className,
  language = "tsx",
  children,
  size = "200px",
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<string>("preview");

  return (
    <Card className={cn(` overflow-hidden overflow-y-auto  w-${size}`, className)}>
      <Tabs
        defaultValue="preview"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="flex  items-center justify-between border-b px-4">
          {fileName && (
            <p className="text-sm text-muted-foreground py-3">{fileName}</p>
          )}
          <TabsList className="grid grid-cols-2 w-[200px] my-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="p-4 rounded-md">
          {children}
        </TabsContent>
        <TabsContent value="code" className="p-0">
          <div className="p-4 rounded-md bg-gray-600  max-h-full m-3">
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                background: "transparent",
                margin: 0,
                width: `full`,
              }}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
