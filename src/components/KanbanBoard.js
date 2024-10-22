import React from 'react';
import KanbanColumn from './KanbanColumn';
import './KanbanBoard.css';

function KanbanBoard({ groupedTickets, users, grouping }) {
  return (
    <div className="kanban-board">
      {Object.entries(groupedTickets).map(([key, tickets]) => (
        <KanbanColumn
          key={key}
          title={key}
          tickets={tickets}
          users={users}
          grouping={grouping}
        />
      ))}
    </div>
  );
}

export default KanbanBoard;
