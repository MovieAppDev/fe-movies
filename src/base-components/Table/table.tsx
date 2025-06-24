// src/base-components/Table/table.tsx
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

interface FavoriteMovie {
  id: number;
  user_id: number;
  imdb_id: string;
  title: string;
  year: string;
  poster: string;
}

interface TableProps {
  columns: GridColDef[];
  data: FavoriteMovie[];
  getRowId: (row: FavoriteMovie) => number;
  pageSize?: number;
  heightAuto?: boolean;
  className?: string;
}

export const Table = ({
  columns,
  data,
  getRowId,
  pageSize = 10,
  heightAuto = true,
  className = "",
}: TableProps) => {
  return (
    <div className={`w-full ${className}`} style={{ overflowX: "auto" }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={getRowId}
        autoHeight={heightAuto}
        density="compact"
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: { pageSize },
          },
        }}
        sx={{
          borderRadius: 2,
          border: "1px solid #e5e7eb",
          fontFamily: "inherit",
          "& .MuiDataGrid-cell": {
            padding: "6px 12px",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#f3f4f6",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
};
