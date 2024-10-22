import React from 'react';
import KanbanCard from './KanbanCard';
import './KanbanColumn.css';
import { FaPlus, FaEllipsisH } from 'react-icons/fa';
import { ReactComponent as BacklogIcon } from '../assets/icons/Backlog.svg';
import { ReactComponent as TodoIcon } from '../assets/icons/To-do.svg';
import { ReactComponent as InProgressIcon } from '../assets/icons/in-progress.svg';
import { ReactComponent as DoneIcon } from '../assets/icons/Done.svg';
import { ReactComponent as CancelledIcon } from '../assets/icons/Cancelled.svg';

function KanbanColumn({ title, tickets, users, grouping }) {
  const getIcon = () => {
    switch (grouping) {
      case 'status':
        switch (title.toLowerCase()) {
          case 'backlog': return <BacklogIcon />;
          case 'todo': return <TodoIcon />;
          case 'in progress': return <InProgressIcon />;
          case 'done': return <DoneIcon />;
          case 'cancelled': return <CancelledIcon />;
          default: return null;
        }
      case 'userId':
        return '👤';
      case 'priority':
        return '🚨';
      default:
        return '📌';
    }
  };

  return (
    <div className="kanban-column">
      <div className="column-header">
        <div className="column-title">
          {getIcon()} <span style={{ marginLeft: '8px' }}>{title}</span> <span className="ticket-count">{tickets.length}</span>
        </div>
        <div className="column-actions">
          <FaPlus />
          <FaEllipsisH />
        </div>
      </div>
      {tickets.map(ticket => (
        <KanbanCard
          key={ticket.id}
          ticket={ticket}
          user={users.find(user => user.id === ticket.userId)}
          grouping={grouping}
        />
      ))}
    </div>
  );
}

export default KanbanColumn;
