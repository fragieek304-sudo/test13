import { User } from '../types';

const USERS_KEY = 'needlscan_users';
const SESSION_KEY = 'needlscan_session';

// ✅ Link di Deployment Produzione (NeedlScan Backend)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyfEsjl2lGwTr8Xwkv2JBSmCrK7BbSfL2w1yBJs-9wOHiOQ-r5ojlxsuUdmN0DyOdEZ/exec'; 

const getLocalUsers = (): User[] => {
  const usersStr = localStorage.getItem(USERS_KEY);
  return usersStr ? JSON.parse(usersStr) : [];
};

export const getCurrentUser = (): User | null => {
  const sessionStr = localStorage.getItem(SESSION_KEY);
  return sessionStr ? JSON.parse(sessionStr) : null;
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Funzione interna per inviare i dati di Signup
const sendToGoogleSheets = async (name: string, email: string, newsletter: boolean) => {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('INSERISCI_QUI')) {
    console.warn('Google Script URL not configured.');
    return;
  }

  const newsletterStatus = newsletter ? 'Enabled' : 'Disabled';
  console.log(`Sending Signup to Sheets: ${name}, ${email}`);

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necessario per Google Apps Script
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({ 
        action: 'signup', // Identificatore azione
        name, 
        email,
        newsletter: newsletterStatus 
      }),
    });
    console.log('Signup request sent');
  } catch (error) {
    console.error('Error sending signup to Google Sheets:', error);
  }
};

// Nuova funzione esportata per inviare messaggi di supporto
export const sendSupportMessage = async (name: string, email: string, subject: string, message: string) => {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('INSERISCI_QUI')) {
    console.warn('Google Script URL not configured.');
    return;
  }

  console.log(`Sending Support Message: ${subject} from ${email}`);

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Necessario per Google Apps Script
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify({ 
        action: 'support', // Identificatore azione
        name, 
        email,
        subject,
        message 
      }),
    });
    console.log('Support message request sent');
  } catch (error) {
    console.error('Error sending support message:', error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  await delay(800);
  const users = getLocalUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

  if (!user) {
    throw new Error('Invalid email or password');
  }

  const sessionUser = { ...user };
  delete sessionUser.password;
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));

  return sessionUser;
};

export const signupUser = async (name: string, email: string, password: string, newsletter: boolean = false): Promise<User> => {
  await delay(800);
  const users = getLocalUsers();
  
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('User with this email already exists');
  }

  const newUser: User = {
    id: crypto.randomUUID(),
    name,
    email,
    password
  };

  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));

  const sessionUser = { ...newUser };
  delete sessionUser.password;
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));

  // Invia i dati al foglio Google
  sendToGoogleSheets(name, email, newsletter);

  return sessionUser;
};

export const logoutUser = async () => {
  await delay(300);
  localStorage.removeItem(SESSION_KEY);
};