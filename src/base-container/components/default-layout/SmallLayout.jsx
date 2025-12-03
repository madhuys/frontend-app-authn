import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const SmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <span className="bg-primary-400 w-100">
      <div className="col-md-12 small-screen-top-stripe" />
      <div>
        <Hyperlink destination={getConfig().MARKETING_SITE_BASE_URL}>
          <Image className="logo-small" alt={getConfig().SITE_NAME} src={getConfig().LOGO_WHITE_URL} />
        </Hyperlink>
        <div className="d-flex align-items-center m-3.5">
          <div className={classNames({ 'small-yellow-line mr-n2.5': getConfig().SITE_NAME === 'edX' })} />
          <div>
            {/* CUSTOM: Big visible heart and I Love You message */}
            <div className="text-center mb-4 p-4" style={{ 
              backgroundColor: '#FF1493', 
              borderRadius: '20px',
              border: '5px solid #FFD700',
              boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)'
            }}>
              <div style={{ marginBottom: '20px' }}>
                <Image 
                  src="https://png.pngtree.com/png-vector/20200903/ourmid/pngtree-3d-love-symbol-logo-png-image_2338413.jpg" 
                  alt="Love Symbol" 
                  style={{ width: '150px', height: 'auto' }}
                />
              </div>
              <h1 style={{ 
                fontSize: '48px', 
                fontWeight: 'bold', 
                color: '#FFFFFF',
                textShadow: '3px 3px 6px rgba(0,0,0,0.5)',
                margin: '0'
              }}>
                I LOVE YOU! 💕
              </h1>
              <p style={{ 
                fontSize: '24px', 
                color: '#FFFF00',
                marginTop: '15px',
                fontWeight: 'bold'
              }}>
                Welcome to MadhuEdX Learning!
              </p>
            </div>
            {/* END CUSTOM */}
            
            <h1
              className={classNames(
                'text-white mt-3.5 mb-3.5',
              )}
            >
              <span>
                {formatMessage(messages['start.learning'])}{' '}
                <span className="text-accent-a d-inline-block">
                  {formatMessage(messages['with.site.name'], { siteName: getConfig().SITE_NAME })}
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </span>
  );
};

export default SmallLayout;
