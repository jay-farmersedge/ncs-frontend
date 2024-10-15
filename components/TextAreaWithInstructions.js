import React from 'react';
import styles from './TextAreaWithInstructions.module.css';

const TextAreaWithInstructions = () => {
  return (
    <div className={`d-flex flex-wrap ${styles.container}`}>
      <div className={styles.leftColumn}>
        <textarea className="form-control" rows="10" placeholder="Enter text here..."></textarea>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.instructions}>
          Instructions...<br />
          More text...<br />
          And more...
        </div>
      </div>
    </div>
  );
};

export default TextAreaWithInstructions;
