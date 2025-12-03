import React from 'react';
import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const LargeLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
              text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 
                           0 0 40px rgba(255, 215, 0, 0.6),
                           0 0 60px rgba(255, 215, 0, 0.4);
            }
            50% { 
              text-shadow: 0 0 30px rgba(255, 215, 0, 1), 
                           0 0 60px rgba(255, 215, 0, 0.8),
                           0 0 90px rgba(255, 215, 0, 0.6);
            }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            25% { transform: scale(1.1); }
            50% { transform: scale(1); }
            75% { transform: scale(1.15); }
          }
          
          @keyframes cape-flow {
            0%, 100% { transform: rotate(-2deg) skewX(-2deg); }
            50% { transform: rotate(2deg) skewX(2deg); }
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes sparkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          .madhu-hero-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(-45deg, #0f0c29, #302b63, #24243e, #0f0c29);
            background-size: 400% 400%;
            animation: gradient-shift 15s ease infinite;
            position: relative;
            overflow: hidden;
            padding: 2rem;
          }
          
          .madhu-hero-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: 
              radial-gradient(circle at 20% 80%, rgba(220, 38, 38, 0.15) 0%, transparent 40%),
              radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 40%),
              radial-gradient(circle at 40% 40%, rgba(234, 179, 8, 0.1) 0%, transparent 30%);
            pointer-events: none;
          }
          
          .madhu-glass-card {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 32px;
            padding: 3.5rem 3rem;
            box-shadow: 
              0 32px 64px rgba(0, 0, 0, 0.4),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.1);
            position: relative;
            z-index: 10;
            max-width: 520px;
            width: 100%;
          }
          
          .madhu-glass-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          }
          
          .madhu-superman-emoji {
            font-size: 7rem;
            display: block;
            text-align: center;
            animation: float 3s ease-in-out infinite;
            filter: drop-shadow(0 20px 40px rgba(220, 38, 38, 0.4));
            margin-bottom: 1rem;
          }
          
          .madhu-superman-title {
            font-size: 2.5rem;
            font-weight: 900;
            text-align: center;
            margin: 0 0 1.5rem 0;
            background: linear-gradient(
              90deg, 
              #ff6b6b, 
              #feca57, 
              #ff6b6b, 
              #feca57
            );
            background-size: 300% auto;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: shimmer 4s linear infinite;
            text-transform: uppercase;
            letter-spacing: 6px;
            font-family: system-ui, -apple-system, sans-serif;
          }
          
          .madhu-heart-container {
            display: flex;
            justify-content: center;
            gap: 0.75rem;
            margin-bottom: 1.5rem;
          }
          
          .madhu-heart {
            font-size: 2rem;
            animation: heartbeat 1.2s ease-in-out infinite;
            filter: drop-shadow(0 0 15px currentColor);
          }
          
          .madhu-heart:nth-child(1) { animation-delay: 0s; color: #ff6b6b; }
          .madhu-heart:nth-child(2) { animation-delay: 0.15s; color: #54a0ff; }
          .madhu-heart:nth-child(3) { animation-delay: 0.3s; color: #5f27cd; }
          .madhu-heart:nth-child(4) { animation-delay: 0.45s; color: #ff6b6b; }
          
          .madhu-welcome-box {
            background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
            border-radius: 20px;
            padding: 1.75rem;
            margin-bottom: 2rem;
            border: 1px solid rgba(255,255,255,0.06);
            position: relative;
            overflow: hidden;
          }
          
          .madhu-welcome-box::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,215,0,0.03) 0%, transparent 60%);
            animation: cape-flow 6s ease-in-out infinite;
          }
          
          .madhu-welcome-text {
            font-size: 1.4rem;
            font-weight: 600;
            text-align: center;
            color: rgba(255, 255, 255, 0.9);
            margin: 0;
            line-height: 1.6;
            position: relative;
            z-index: 1;
          }
          
          .madhu-welcome-text .madhu-highlight {
            color: #feca57;
            font-weight: 800;
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .madhu-welcome-text .madhu-name {
            display: block;
            margin-top: 0.5rem;
            font-size: 1.6rem;
            font-weight: 800;
            background: linear-gradient(90deg, #54a0ff, #a29bfe, #fd79a8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .madhu-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
            margin: 0 0 2rem 0;
            border: none;
          }
          
          .madhu-cta-section {
            text-align: center;
          }
          
          .madhu-start-learning {
            font-size: 2rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 0.5rem 0;
            letter-spacing: 1px;
            text-shadow: 0 2px 20px rgba(0,0,0,0.3);
          }
          
          .madhu-site-name-text {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.6);
            margin: 0 0 1.75rem 0;
            font-weight: 400;
          }
          
          .madhu-site-name-text strong {
            color: #feca57;
            font-weight: 700;
          }
          
          .madhu-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            font-weight: 700;
            color: #0f0c29 !important;
            background: linear-gradient(135deg, #feca57 0%, #ff9f43 50%, #feca57 100%);
            background-size: 200% auto;
            border: none;
            border-radius: 50px;
            text-decoration: none !important;
            box-shadow: 
              0 10px 40px rgba(254, 202, 87, 0.35),
              0 2px 10px rgba(254, 202, 87, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
          }
          
          .madhu-cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.3),
              transparent
            );
            transition: left 0.5s ease;
          }
          
          .madhu-cta-button:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 
              0 20px 50px rgba(254, 202, 87, 0.5),
              0 5px 20px rgba(254, 202, 87, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.4);
            background-position: right center;
          }
          
          .madhu-cta-button:hover::before {
            left: 100%;
          }
          
          .madhu-floating-element {
            position: absolute;
            font-size: 1.25rem;
            opacity: 0.25;
            animation: sparkle 3s ease-in-out infinite;
            z-index: 5;
            pointer-events: none;
          }
          
          .madhu-star-1 { top: 8%; left: 8%; animation-delay: 0s; }
          .madhu-star-2 { top: 15%; right: 12%; animation-delay: 0.8s; }
          .madhu-star-3 { bottom: 25%; left: 6%; animation-delay: 1.6s; }
          .madhu-star-4 { bottom: 12%; right: 8%; animation-delay: 0.4s; }
          .madhu-star-5 { top: 45%; left: 4%; animation-delay: 1.2s; }
          .madhu-star-6 { top: 55%; right: 4%; animation-delay: 2s; }
          .madhu-star-7 { top: 25%; left: 15%; animation-delay: 2.4s; }
          .madhu-star-8 { bottom: 40%; right: 12%; animation-delay: 1.8s; }
          
          .madhu-logo-image {
            max-width: 160px;
            height: auto;
            margin: 0 auto 0.5rem;
            display: block;
            filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.3));
            opacity: 0.95;
          }
        `}
      </style>
      
      <div className={classNames('madhu-hero-container')}>
        {/* Floating Decorative Elements */}
        <span className="madhu-floating-element madhu-star-1">✦</span>
        <span className="madhu-floating-element madhu-star-2">✧</span>
        <span className="madhu-floating-element madhu-star-3">✦</span>
        <span className="madhu-floating-element madhu-star-4">✧</span>
        <span className="madhu-floating-element madhu-star-5">✦</span>
        <span className="madhu-floating-element madhu-star-6">✧</span>
        <span className="madhu-floating-element madhu-star-7">✦</span>
        <span className="madhu-floating-element madhu-star-8">✧</span>
        
        <div className={classNames('madhu-glass-card')}>
          {/* Logo */}
          <Image
            className="madhu-logo-image"
            alt={getConfig().SITE_NAME}
            src={getConfig().LOGO_URL}
          />
          
          {/* CUSTOM: Superman Hero Section */}
          <span className="madhu-superman-emoji" role="img" aria-label="Superman">
            🦸‍♂️
          </span>
          
          <h1 className="madhu-superman-title">
            I AM SUPERMAN!
          </h1>
          
          <div className="madhu-heart-container">
            <span className="madhu-heart" role="img" aria-label="heart">♥</span>
            <span className="madhu-heart" role="img" aria-label="heart">♥</span>
            <span className="madhu-heart" role="img" aria-label="heart">♥</span>
            <span className="madhu-heart" role="img" aria-label="heart">♥</span>
          </div>
          
          <div className="madhu-welcome-box">
            <p className="madhu-welcome-text">
              Welcome to <span className="madhu-highlight">MadhuEdX</span> Learning
              <span className="madhu-name">Bharathji!</span>
            </p>
          </div>
          {/* END CUSTOM */}
          
          <hr className="madhu-divider" />
          
          {/* CTA Section */}
          <div className="madhu-cta-section">
            <h2 className="madhu-start-learning">
              {formatMessage(messages['start.learning'])}
            </h2>
            
            <p className="madhu-site-name-text">
              {formatMessage(messages['with.site.name'], { 
                siteName: <strong>{getConfig().SITE_NAME}</strong> 
              })}
            </p>
            
            <Hyperlink 
              className="madhu-cta-button"
              destination={getConfig().LMS_BASE_URL}
            >
              Explore Courses
              <span role="img" aria-label="rocket">🚀</span>
            </Hyperlink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LargeLayout;