<h2>Motivation</h2> 
Experiment with hoisting in react hooks

<h2>Reddit</h2> 
<ul>
<li>useEffect and useState are on the top of the code as recommended by <a href='https://reactjs.org/docs/hooks-rules.html'>react</a></li>
<li>useEffect callback - getTitles is a named function</li>
<li>hoisting is used on the useEffect callback - getTitles</li>
</ul>


<h2>RedditBad</h2> 
<ul>
<li>useEffect and useState are NOT on the top of the code as recommended by <a href='https://reactjs.org/docs/hooks-rules.html'>react</a></li>
<li>useEffect callback - getTitles is a named arrow function</li>
<li>hoisting is not effective on the useEffect callback when it is a named arrow function</li>
</ul>

<h2>Conclusion</h2>
Once you decide to use a named function in useEffect ----> use ONLY named function not named arrow function 

