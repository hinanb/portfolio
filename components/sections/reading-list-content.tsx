"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ReadingList = {
  books: Array<{
    title: string;
    author: string;
    category: string;
    status: string;
  }>;
  articles: Array<{ title: string; url: string; category: string }>;
  podcasts: Array<{ title: string; url: string; category: string }>;
};

export function ReadingListContent({ readingList }: { readingList: ReadingList }) {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "System Design",
    "Java",
    "Software Engineering",
    "Engineering",
    "Messaging",
  ];

  const filteredBooks =
    filter === "All"
      ? readingList.books
      : readingList.books.filter((b) => b.category === filter);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              filter === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:border-accent/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="mb-6 text-xl font-semibold">Books</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {filteredBooks.map((book) => (
              <Card key={book.title}>
                <CardHeader>
                  <CardTitle className="text-base">{book.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">by {book.author}</p>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Badge variant="secondary">{book.category}</Badge>
                  <Badge variant="outline">{book.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-semibold">Articles</h2>
          <div className="space-y-3">
            {readingList.articles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border p-4 transition-colors hover:border-accent/50"
              >
                <p className="font-medium">{article.title}</p>
                <Badge variant="outline" className="mt-2">
                  {article.category}
                </Badge>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-semibold">Podcasts</h2>
          <div className="space-y-3">
            {readingList.podcasts.map((podcast) => (
              <a
                key={podcast.title}
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-border p-4 transition-colors hover:border-accent/50"
              >
                <p className="font-medium">{podcast.title}</p>
                <Badge variant="outline" className="mt-2">
                  {podcast.category}
                </Badge>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
