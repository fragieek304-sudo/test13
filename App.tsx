import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import AIServicesPage from './components/category-pages/AIServicesPage';
import PhotographyPage from './components/category-pages/PhotographyPage';
import GraphicsDesignPage from './components/category-pages/GraphicsDesignPage';
import DigitalMarketingPage from './components/category-pages/DigitalMarketingPage';
import WritingTranslationPage from './components/category-pages/WritingTranslationPage';
import FinancePage from './components/category-pages/FinancePage';
import BusinessPage from './components/category-pages/BusinessPage';
import DataPage from './components/category-pages/DataPage';
import VideoAnimationPage from './components/category-pages/VideoAnimationPage';
import MusicAudioPage from './components/category-pages/MusicAudioPage';
import ProgrammingTechPage from './components/category-pages/ProgrammingTechPage';
import PersonalGrowthPage from './components/category-pages/PersonalGrowthPage';
import { getCurrentUser, logoutUser } from './lib/auth';
import { User } from './types';

type Page = 'home' | 'login' | 'signup' | 'category-ai' | 'category-photography' | 'category-graphics' | 'category-marketing' | 'category-writing' | 'category-finance' | 'category-business' | 'category-data' | 'category-video' | 'category-music' | 'category-programming' | 'category-personal';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const sessionUser = getCurrentUser();
    if (sessionUser) {
      setUser(sessionUser);
    }
    setLoading(false);
  }, []);

  const handleNavigate = (page: Page) => {
    // Reset scroll when changing pages
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleCategoryClick = (categoryTitle: string) => {
    // Routing logic for categories
    if (categoryTitle === 'AI Services') {
        setCurrentPage('category-ai');
    } else if (categoryTitle === 'Photography') {
        setCurrentPage('category-photography');
    } else if (categoryTitle === 'Graphics & Design') {
        setCurrentPage('category-graphics');
    } else if (categoryTitle === 'Digital Marketing') {
        setCurrentPage('category-marketing');
    } else if (categoryTitle === 'Writing & Translation') {
        setCurrentPage('category-writing');
    } else if (categoryTitle === 'Finance') {
        setCurrentPage('category-finance');
    } else if (categoryTitle === 'Business') {
        setCurrentPage('category-business');
    } else if (categoryTitle === 'Data') {
        setCurrentPage('category-data');
    } else if (categoryTitle === 'Video & Animation') {
        setCurrentPage('category-video');
    } else if (categoryTitle === 'Music & Audio') {
        setCurrentPage('category-music');
    } else if (categoryTitle === 'Programming & Tech') {
        setCurrentPage('category-programming');
    } else if (categoryTitle === 'Personal Growth') {
        setCurrentPage('category-personal');
    } else {
        // Placeholder or scroll logic for other categories if needed later
        console.log(`Clicked category: ${categoryTitle}`);
    }
  };

  const handleLoginSuccess = (loggedInUser: User) => {
    setUser(loggedInUser);
    handleNavigate('home');
  };

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    handleNavigate('home');
  };

  if (loading) {
    return <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">Loading...</div>;
  }

  if (currentPage === 'login') {
    return <Login onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
  }

  if (currentPage === 'signup') {
    return <Signup onNavigate={handleNavigate} onLoginSuccess={handleLoginSuccess} />;
  }

  // Render Category Pages
  if (currentPage === 'category-ai') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><AIServicesPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-photography') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><PhotographyPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-graphics') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><GraphicsDesignPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-marketing') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><DigitalMarketingPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-writing') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><WritingTranslationPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-finance') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><FinancePage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-business') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><BusinessPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-data') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><DataPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-video') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><VideoAnimationPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-music') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><MusicAudioPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-programming') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><ProgrammingTechPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }
  if (currentPage === 'category-personal') {
      return <div className="min-h-screen bg-brand-dark font-sans"><Navbar onNavigate={handleNavigate} user={user} onLogout={handleLogout} /><PersonalGrowthPage onBack={() => handleNavigate('home')} /><Footer /></div>;
  }

  return (
    <div className="min-h-screen bg-brand-dark font-sans selection:bg-brand-green selection:text-black">
      <Navbar 
        onNavigate={handleNavigate} 
        user={user} 
        onLogout={handleLogout}
      />
      <main>
        <Hero />
        <ServiceGrid onCategoryClick={handleCategoryClick} />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;