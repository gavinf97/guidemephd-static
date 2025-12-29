import React from 'react';
import { Link } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <div className="container">
                <div className="legal-layout">
                    <aside className="legal-sidebar">
                        <nav>
                            <ul>
                                <li><a href="#intro">1. Introduction</a></li>
                                <li><a href="#use">2. Use of Site</a></li>
                                <li><a href="#intellectual">3. Intellectual Property</a></li>
                                <li><a href="#liability">4. Liability</a></li>
                                <li><a href="#contact">5. Contact</a></li>
                            </ul>
                        </nav>
                    </aside>

                    <div className="legal-content">
                        <h1>Terms of Service</h1>
                        <p className="effective-date">Last Updated: February 2025</p>

                        <div className="placeholder-notice">
                            <p><strong>Note:</strong> The full Terms of Service are currently being updated. Please check back soon.</p>
                        </div>

                        <section id="intro">
                            <h2>1. Introduction</h2>
                            <p>Welcome to Guide Me PhD. By accessing our website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                        </section>

                        <section id="use">
                            <h2>2. Use of Site</h2>
                            <p>The materials on this website are provided for general information only. You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
                        </section>

                        <section id="intellectual">
                            <h2>3. Intellectual Property</h2>
                            <p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
                        </section>

                        <section id="liability">
                            <h2>4. Limitation of Liability</h2>
                            <p>The materials on Guide Me PhD's website are provided on an 'as is' basis. Guide Me PhD makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                        </section>

                        <section id="contact">
                            <h2>5. Contact Us</h2>
                            <p>If you have any questions about our Terms of Service, please contact us at <a href="mailto:contact@guidemephd.com">contact@guidemephd.com</a>.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
