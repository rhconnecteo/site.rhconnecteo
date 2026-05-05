import { useState } from 'react'
import './App.css'


function App() {
  const [copiedId, setCopiedId] = useState(null)
  
  const sites = [
    {
      name: 'Onboarding HR BP',
      url: 'https://onboardinghrbp.vercel.app',
      users: ['koloina', 'christiana', 'lanto', 'mamonjisoa', 'malala'],
      password: 'onboarding',
      category: 'RH'
    },
    {
      name: 'Onboarding HR O',
      url: 'https://onboardinghro.vercel.app',
      users: ['tyfannie'],
      password: 'onboarding',
      category: 'RH'
    },
    {
      name: 'OSTIE (RH)',
      url: 'https://ostie.vercel.app',
      users: ['admin'],
      password: 'ostie',
      category: 'RH',
      note: 'Version RH'
    },
    {
      name: 'OSTIE (Production)',
      url: 'https://ostie.vercel.app',
      users: ['production'],
      password: 'ostie',
      category: 'Production'
    },
    {
      name: 'Onboarding IT',
      url: 'https://onboardingit.vercel.app',
      users: ['admin'],
      password: 'support_it',
      category: 'IT'
    },
    {
      name: 'Savoir-Outils',
      url: 'https://savoir-outils.vercel.app',
      users: ['admin'],
      password: 'outil',
      category: 'Outils'
    },
    {
      name: 'Reporting Recrutement',
      url: 'https://reporting-recrutement.vercel.app',
      users: ['rh'],
      password: 'password123',
      category: 'Recrutement'
    },
    {
      name: 'Identification Collaborateur',
      url: 'https://identification-collabo.vercel.app',
      users: [],
      password: '',
      category: 'Collaborateur'
    },
    {
      name: 'Mouvement Collaborateur',
      url: 'https://mouvement-rh.vercel.app/',
      users: [],
      password: '',
      category: 'Collaborateur'
    },
    {
      name: 'Fiche de Présence',
      url: 'https://fichedepresence.vercel.app',
      users: [],
      password: '',
      category: 'Collaborateur'
    }
  ]

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>Accès aux Applications RH</h1>
        </div>
      </header>

      <main className="app-main">
        <div className="sites-grid">
          {sites.map((site, index) => (
            <div 
              key={index} 
              className="site-card"
              onClick={() => window.open(site.url, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-header">
                <h2>{site.name}</h2>
                <span className="category-badge">{site.category}</span>
              </div>
              
              <div className="card-body">
                {site.users.length > 0 ? (
                  <>
                    <div className="field">
                      <label>Nom(s) d'utilisateur</label>
                      <div className="users-list">
                        {site.users.map((user, userIndex) => (
                          <div key={userIndex} className="user-item">
                            <code>{user}</code>
                            <button
                              className="copy-btn"
                              onClick={() => copyToClipboard(user, `user-${index}-${userIndex}`)}
                              title="Copier le nom d'utilisateur"
                            >
                              {copiedId === `user-${index}-${userIndex}` ? '✓' : '📋'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="field">
                      <label>Mot de passe</label>
                      <div className="value-group">
                        <code className="password">{site.password}</code>
                        <button
                          className="copy-btn"
                          onClick={() => copyToClipboard(site.password, `pwd-${index}`)}
                          title="Copier le mot de passe"
                        >
                          {copiedId === `pwd-${index}` ? '✓' : '📋'}
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="no-credentials">
                    <p>Pas d'identifiant nécessaire</p>
                  </div>
                )}

                {site.note && (
                  <div className="note">
                    <small>℘ {site.note}</small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
