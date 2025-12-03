import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const MediumLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <div className="w-100 medium-screen-top-stripe" />
      <div className="w-100 p-0 mb-3 d-flex">
        <div className="col-md-10 bg-primary-400">
          <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
            <Image alt={getConfig().SITE_NAME} className="logo" src={getConfig().LOGO_WHITE_URL} />
          </Hyperlink>
          <div className="d-flex align-items-center justify-content-center mb-4 ">
            <div className={classNames({ 'mt-1 medium-yellow-line': getConfig().SITE_NAME === 'edX' })} />
            <div>
              <h1
                className={classNames(
                  'display-1 text-white mt-5 mb-5 mr-2 main-heading',
                  { 'ml-4.5': getConfig().SITE_NAME !== 'edX' },
                )}
              >
                <span>
                  {formatMessage(messages['start.learning'])}{' '}
                  <span className="text-accent-a d-inline-block">
                    {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
                  </span>
                </span>
              </h1>
              {/* CUSTOM: Big visible heart and I Love You message */}
              <div className="text-center mb-4 p-4" style={{ 
                backgroundColor: '#FF1493', 
                borderRadius: '25px',
                border: '6px solid #FFD700',
                boxShadow: '0 0 25px rgba(255, 20, 147, 0.6)',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                <div style={{ marginBottom: '20px' }}>
                  <Image 
                    src="https://png.pngtree.com/png-vector/20200903/ourmid/pngtree-3d-love-symbol-logo-png-image_2338413.jpg" 
                    alt="Love Symbol" 
                    style={{ width: '180px', height: 'auto' }}
                  />
                </div>
                <h1 style={{ 
                  fontSize: '56px', 
                  fontWeight: 'bold', 
                  color: '#FFFFFF',
                  textShadow: '3px 3px 7px rgba(0,0,0,0.5)',
                  margin: '0'
                }}>
                  I LOVE YOU! 💕
                </h1>
                <p style={{ 
                  fontSize: '28px', 
                  color: '#FFFF00',
                  marginTop: '18px',
                  fontWeight: 'bold'
                }}>
                  Welcome to MadhuEdX Learning!
                </p>
              </div>
              {/* END CUSTOM */}
            </div>
          </div>
        </div>
        <div className="col-md-2 bg-white p-0">
          <svg className="w-100 h-100 medium-screen-svg-primary" preserveAspectRatio="xMaxYMin meet">
            <g transform="skewX(168)">
              <rect x="0" y="0" height="100%" width="100%" />
            </g>
          </svg>
        </div>
      </div>
    </>
  );
};

export default MediumLayout;
