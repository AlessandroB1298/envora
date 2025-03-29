"use client";

import type React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { useState } from "react";
import { Card } from "@/app/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";


interface CodePreviewProps {
  code: string;
  components?: string;
  fileName?: string;
  className?: string;
  language?: string;
  children: React.ReactNode;
  size?: string;
  color?: string
}



export function CodePreview({
  code,
  fileName,
  components = "",
  className,
  language = "tsx",
  children,
  size = "300px",
  color = "bg-gray-600"
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<string>("preview");

  const handleClick = (e: string) => {
    try {
      navigator.clipboard.writeText(e);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Card className={cn(` overflow-hidden overflow-y-auto  w-${size}`, className)}>
      {components != "" ? (
        <Tabs
          defaultValue="preview"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="flex  items-center justify-between border-b px-4">
            {fileName && (
              <p className="text-sm text-muted-foreground py-3">{fileName}</p>
            )}
            <Copy
              onClick={() => {
                handleClick(code + components);
              }}
              className="text-white/30 hover:text-white/60 mr-12"
            />

            <TabsList className="grid grid-cols-3 w-[350px]  my-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>

            </TabsList>
          </div>
          <TabsContent value="preview" className="p-4 rounded-md">
            {children}
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <div className={`p-4 rounded-md ${color} m-3 max-h-full`}>

              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  width: `100%`,

                }}
                showLineNumbers
              >
                {code}
              </SyntaxHighlighter>
            </div>

          </TabsContent>


          <TabsContent value="components" className="p-0">
            <div className={`p-4 rounded-md ${color} max-h-full`}>

              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  width: `100%`,

                }}
                showLineNumbers
              >
                {components}
              </SyntaxHighlighter>
            </div>

          </TabsContent>

        </Tabs>

      ) : (
        <Tabs
          defaultValue="preview"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="flex  items-center justify-between border-b px-4">
            {fileName && (
              <p className="text-sm text-muted-foreground py-3">{fileName}</p>
            )}
            <Copy
              onClick={() => {
                handleClick(code);
              }}
              className="text-white/30 hover:text-white/60 mr-[30vw]"
            />
            <TabsList className="grid grid-cols-2 w-[200px]  my-2">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>

            </TabsList>
          </div>
          <TabsContent value="preview" className="p-4 rounded-md">
            {children}
          </TabsContent>
          <TabsContent value="code" className="p-0">
            <div className={`p-4 rounded-md ${color} max-h-full `}>
              <SyntaxHighlighter
                language={language}

                style={vscDarkPlus}
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  width: `100%`
                }}
                showLineNumbers
              >
                {code}
              </SyntaxHighlighter>

            </div>

          </TabsContent>

        </Tabs>

      )}
    </Card>
  );
}
