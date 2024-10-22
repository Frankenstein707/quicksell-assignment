import React, { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import DisplayOptions from './components/DisplayOptions';
import Footer from './components/Footer';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(() => {
    return localStorage.getItem('grouping') || 'status';
  });
  const [sorting, setSorting] = useState(() => {
    return localStorage.getItem('sorting') || 'priority';
  });

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const groupTickets = () => {
    const grouped = {};
    tickets.forEach(ticket => {
      const key = ticket[grouping];
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(ticket);
    });
    return grouped;
  };

  const sortTickets = (groupedTickets) => {
    const sortedGroups = {};
    Object.keys(groupedTickets).forEach(key => {
      sortedGroups[key] = groupedTickets[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else if (sorting === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });
    return sortedGroups;
  };

  const handleGroupingChange = (newGrouping) => {
    setGrouping(newGrouping);
  };

  const handleSortingChange = (newSorting) => {
    setSorting(newSorting);
  };

  const groupedAndSortedTickets = sortTickets(groupTickets());

  return (
      
    <div className="App">
      <header className="App-header">
        <DisplayOptions
          grouping={grouping}
          sorting={sorting}
          onGroupingChange={handleGroupingChange}
          onSortingChange={handleSortingChange}
        />
      </header>
      <main className="kanban-board">
        <KanbanBoard
          groupedTickets={groupedAndSortedTickets}
          users={users}
          grouping={grouping}
        />
        </main>
        <Footer />
      </div>
    
  );
}

export default App;
