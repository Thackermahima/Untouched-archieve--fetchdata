import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UploadForm from './components/UploadForm';
import BookList from './components/ListingPage/BookList';
import BookDetail from './components/DetailsPage/BookDetail';
import DocumentList from './components/ListingPage/DocumentList';
import NewspaperList from './components/ListingPage/NewspaperList'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WebsiteList from './components/ListingPage/WebsitesList';
function App() {
  return (
    <div className="App">
<Header />
<Routes>
<Route path="/" element= {<Home />}/>
  <Route path ="/upload-form" element = {<UploadForm />}/>
  <Route path ="/book-list" element = { <BookList />} />
  <Route path="/book-detail" element = { <BookDetail /> } />
<Route path="/documents-list" element = {<DocumentList />} />
<Route path = "/newspapers-list" element = { <NewspaperList /> } />
<Route path = "/websites-list" element = { <WebsiteList /> } />
</Routes>
<Footer />
      {/* <BookList></BookList> */}
      {/* <BookDetail></BookDetail> */}
    </div>
  );
}

export default App;
