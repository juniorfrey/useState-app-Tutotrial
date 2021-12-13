import React, {useState} from 'react'

const ConditionApp = () => {
    const [condition, setCondition] = useState(true)

    return (
      <div>
        <button onClick={() => setCondition(!condition)}>Toggle</button>
        {
           /* condition
            ? <h1>Show Message in true</h1>
            : <h1>Anothe message in false</h1>*/
        }

        {
            /*condition
            && <h1>Show Message in true</h1>*/
            
        }

        <h1>State value is {condition.toString()}</h1>

      </div>
    );
}

export default ConditionApp
