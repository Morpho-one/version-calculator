import styles from './MyName.module.css';

function App() {
 

  return <div className={styles.calculator}>
      <input className={styles.display} type="text" />
      <div id="buttons-container">
        <button>C</button>
      </div>
</div>
      
    
  
}

export default App;
