import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_KEY = 'hiss-admin-2024';

export default function AdminDashboard() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Guard: redirect if not admin
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (!isAdmin) {
      navigate('/admin');
      return;
    }
    fetchMembers();
  }, []);

  const fetchMembers = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/admin/members', {
        headers: { 'x-admin-key': ADMIN_KEY }
      });
      const data = await res.json();
      if (data.success) {
        setMembers(data.members);
      } else {
        setError('Failed to load members.');
      }
    } catch (err) {
      setError('Could not connect to server.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('adminKey');
    navigate('/admin');
  };

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div style={styles.page}>
      <div style={styles.grid}></div>

      {/* Header bar */}
      <div style={styles.topBar}>
        <div style={styles.topLeft}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
            <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.35C17.25 23.15 21 18.25 21 13V7L12 2z" fill="url(#sg2)" />
            <defs>
              <linearGradient id="sg2" x1="3" y1="2" x2="21" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00d4ff"/><stop offset="1" stopColor="#0066cc"/>
              </linearGradient>
            </defs>
          </svg>
          <span style={styles.topTitle}>Admin Dashboard</span>
          <span style={styles.badge}>RESTRICTED</span>
        </div>
        <button onClick={handleLogout} style={styles.logoutBtn}
          onMouseEnter={e => e.target.style.background = 'rgba(255,60,60,0.15)'}
          onMouseLeave={e => e.target.style.background = 'rgba(255,60,60,0.08)'}
        >
          Sign Out
        </button>
      </div>

      {/* Main content */}
      <div style={styles.content}>
        {/* Stats card */}
        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <div style={styles.statNum}>{members.length}</div>
            <div style={styles.statLabel}>Total Members</div>
          </div>
          <div style={{ ...styles.statCard, borderColor: 'rgba(0, 212, 255, 0.2)' }}>
            <div style={{ ...styles.statNum, color: '#00d4ff' }}>
              {members.filter(m => {
                const d = new Date(m.createdAt);
                const now = new Date();
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
              }).length}
            </div>
            <div style={styles.statLabel}>Joined This Month</div>
          </div>
          <div style={{ ...styles.statCard, borderColor: 'rgba(100, 255, 180, 0.2)' }}>
            <div style={{ ...styles.statNum, color: '#64ffb4' }}>
              {members.filter(m => {
                const d = new Date(m.createdAt);
                const now = new Date();
                return (now - d) < 7 * 24 * 60 * 60 * 1000;
              }).length}
            </div>
            <div style={styles.statLabel}>Last 7 Days</div>
          </div>
        </div>

        {/* Members table */}
        <div style={styles.tableCard}>
          <div style={styles.tableHeader}>
            <h2 style={styles.tableTitle}>Registered Members</h2>
            {/* Search */}
            <input
              type="text"
              placeholder="🔍  Search by name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={styles.searchInput}
              onFocus={e => e.target.style.borderColor = '#00d4ff'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          {loading ? (
            <div style={styles.loadingWrap}>
              <div style={styles.spinner}></div>
              <p style={styles.loadingText}>Loading members...</p>
            </div>
          ) : error ? (
            <div style={styles.errorBox}>⚠ {error}</div>
          ) : filtered.length === 0 ? (
            <div style={styles.emptyBox}>
              {search ? '🔍 No members match your search.' : '👥 No members have signed up yet.'}
            </div>
          ) : (
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead>
                  <tr>
                    <th style={styles.th}>#</th>
                    <th style={styles.th}>Member Name</th>
                    <th style={{ ...styles.th, textAlign: 'right' }}>Joined</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m, i) => (
                    <tr key={m._id} style={styles.tr}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,212,255,0.05)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <td style={styles.tdNum}>{i + 1}</td>
                      <td style={styles.tdName}>
                        <div style={styles.avatar}>
                          {m.name.charAt(0).toUpperCase()}
                        </div>
                        <span style={styles.nameText}>{m.name}</span>
                      </td>
                      <td style={{ ...styles.td, textAlign: 'right', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                        {formatDate(m.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(60px); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #020812 0%, #040d1a 100%)',
    fontFamily: "'Inter', sans-serif",
    color: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  grid: {
    position: 'fixed',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(0,212,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.025) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    animation: 'gridMove 10s linear infinite',
    pointerEvents: 'none',
    zIndex: 0,
  },
  topBar: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 32px',
    background: 'rgba(2,8,18,0.85)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0,212,255,0.1)',
  },
  topLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  topTitle: {
    fontSize: '17px',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.3px',
  },
  badge: {
    background: 'rgba(0,212,255,0.1)',
    border: '1px solid rgba(0,212,255,0.3)',
    color: '#00d4ff',
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    padding: '3px 8px',
    borderRadius: '4px',
  },
  logoutBtn: {
    padding: '8px 18px',
    background: 'rgba(255,60,60,0.08)',
    border: '1px solid rgba(255,60,60,0.2)',
    borderRadius: '8px',
    color: '#ff6b6b',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 24px',
    animation: 'fadeUp 0.5s ease-out',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '28px',
  },
  statCard: {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '14px',
    padding: '24px',
    textAlign: 'center',
  },
  statNum: {
    fontSize: '40px',
    fontWeight: '700',
    color: '#fff',
    lineHeight: 1,
    marginBottom: '8px',
  },
  statLabel: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.4)',
    fontWeight: '500',
  },
  tableCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  tableHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px 28px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    flexWrap: 'wrap',
    gap: '16px',
  },
  tableTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#fff',
  },
  searchInput: {
    padding: '10px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    width: '220px',
    transition: 'border-color 0.2s',
  },
  tableWrap: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '14px 28px',
    textAlign: 'left',
    fontSize: '12px',
    fontWeight: '600',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  tr: {
    transition: 'background 0.15s',
    cursor: 'default',
  },
  tdNum: {
    padding: '16px 28px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.25)',
    width: '60px',
  },
  tdName: {
    padding: '16px 28px 16px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  },
  td: {
    padding: '16px 28px',
    fontSize: '14px',
    color: 'rgba(255,255,255,0.7)',
    borderBottom: '1px solid rgba(255,255,255,0.04)',
  },
  avatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #00d4ff, #0066cc)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    flexShrink: 0,
  },
  nameText: {
    fontSize: '15px',
    fontWeight: '500',
    color: '#fff',
  },
  loadingWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
    gap: '16px',
  },
  spinner: {
    width: '36px',
    height: '36px',
    border: '3px solid rgba(0,212,255,0.15)',
    borderTop: '3px solid #00d4ff',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  },
  loadingText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '14px',
  },
  errorBox: {
    margin: '32px 28px',
    padding: '16px',
    background: 'rgba(255,60,60,0.08)',
    border: '1px solid rgba(255,60,60,0.2)',
    borderRadius: '10px',
    color: '#ff6b6b',
    fontSize: '14px',
  },
  emptyBox: {
    textAlign: 'center',
    padding: '60px 24px',
    color: 'rgba(255,255,255,0.3)',
    fontSize: '15px',
  },
};
