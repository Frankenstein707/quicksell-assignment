import React from 'react';
import './KanbanCard.css';
import { FaCircle } from 'react-icons/fa';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { ReactComponent as NoPriorityIcon } from '../assets/icons/No-priority.svg';
import { ReactComponent as LowPriorityIcon } from '../assets/icons/Img - Low Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../assets/icons/Img - Medium Priority.svg';
import { ReactComponent as HighPriorityIcon } from '../assets/icons/Img - High Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../assets/icons/SVG - Urgent Priority grey.svg';

function KanbanCard({ ticket, user, grouping }) {
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 4: return <UrgentPriorityIcon />;
      case 3: return <HighPriorityIcon />;
      case 2: return <MediumPriorityIcon />;
      case 1: return <LowPriorityIcon />;
      default: return <NoPriorityIcon />;
    }
  };

  return (
    <div className="kanban-card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {grouping !== 'userId' && (
          <IoPersonCircleSharp className="user-avatar" />
        )}
      </div>
      <h3 className="card-title">
        {grouping !== 'status' && <FaCircle className={`status-icon ${ticket.status.toLowerCase().replace(' ', '-')}`} />}
        {ticket.title}
      </h3>
      <div className="card-footer">
        {grouping !== 'priority' && (
          <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
        )}
        <div className="tags">
          {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">
              <FaCircle className="tag-icon" /> {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default KanbanCard;
