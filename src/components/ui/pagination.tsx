import { Button } from "@/components/ui/button";

export interface PaginationProps {
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageCount: number;
  pageIndex: number;
  setPageIndex: (index: number) => void;
}

export const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageCount,
  pageIndex,
  setPageIndex,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setPageIndex(0)}
        disabled={!canPreviousPage}
      >
        Primeiro
      </Button>
      {[...Array(pageCount).keys()].map(pageNumber => (
        <Button
          key={pageNumber}
          variant={pageIndex === pageNumber ? "default" : "outline"}
          size="sm"
          onClick={() => setPageIndex(pageNumber)}
        >
          {pageNumber + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setPageIndex(pageCount - 1)}
        disabled={!canNextPage}
      >
        Último
      </Button>
    </div>
  );
};
