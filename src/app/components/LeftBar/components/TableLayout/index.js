import React from "react";
import get from "lodash.get";

const TableLayout = ({ tableData, tableSettings }) => (
  <div className="table-responsive">
    <table className="table-borderless text-light w-100">
      {tableData.headings && (
        <thead className="border-bottom border-secondary">
          <tr>
            {tableData.headings.map((e, idx) => (
              <th
                key={e}
                scope="col"
                {...get(tableSettings, `headings[${idx}]`, {})}
              >
                {e}
              </th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {tableData.data.map((e, i) => (
          <tr key={`${e}-${i}`}>
            {e.map((td, idx) => (
              <td
                key={`${e}-${idx}`}
                {...get(tableSettings, `data[${idx}]`, {})}
              >
                {td}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TableLayout;
