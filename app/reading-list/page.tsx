import { Metadata } from "next";
import { Container, PageHeader } from "@/components/layout/container";
import { ReadingListContent } from "@/components/sections/reading-list-content";
import { getData } from "@/lib/content";

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

export const metadata: Metadata = {
  title: "Reading List",
  description: "Books, articles, and podcasts that shape my engineering perspective.",
};

export default function ReadingListPage() {
  const readingList = getData<ReadingList>("reading-list.json");

  return (
    <Container className="py-12">
      <PageHeader
        title="Reading List"
        description="Books, articles, and podcasts that shape my engineering perspective."
      />
      <ReadingListContent readingList={readingList} />
    </Container>
  );
}
