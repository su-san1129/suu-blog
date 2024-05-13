import { Hono } from 'hono';
const articleRoutes = new Hono();

articleRoutes.get('/articles', (c) =>
	c.json([
		{
			title: 'React を使用した高速で応答性の高いウェブアプリケーションの構築',
			body: '\n\n# Reactの基本概念: コンポーネント、Props、State\n\nReactは、モダンなウェブアプリケーション開発において広く使われているJavaScriptライブラリです。Reactの中心的な概念は、コンポーネント、Props、Stateであり、これらを理解することがReactアプリケーションを効果的に構築するための鍵となります。\n\n## コンポーネント\n\nReactのコンポーネントは、UIの独立した再利用可能な部品です。コンポーネントは、HTML要素のように宣言的に記述され、独自の構造、スタイル、および動作を持ちます。コンポーネントは、関数コンポーネントとクラスコンポーネントの2種類があります。\n\n関数コンポーネントの例:\n\n```jsx\nfunction Greeting(props) {\n return <h1>Hello, {props.name}!</h1>;\n}\n```\n\n## Props\n\nPropsは、親コンポーネントから子コンポーネントにデータを渡すための仕組みです。Propsは読み取り専用であり、子コンポーネントは受け取ったPropsを直接変更してはいけません。Propsを使用することで、コンポーネントの再利用性が高まります。\n\nPropsの例:\n\n```jsx\nfunction App() {\n return <Greeting name="John" />;\n}\n```\n\n## State\n\nStateは、コンポーネント内で管理されるデータです。Stateは、コンポーネントのライフサイクル内で変更される可能性があり、その変更に応じてUIが自動的に更新されます。Stateは、クラスコンポーネントの場合は`this.state`オブジェクトで管理され、関数コンポーネントの場合は`useState`フックを使用して管理されます。\n\nクラスコンポーネントでのStateの例:\n\n```jsx\nclass Counter extends React.Component {\n constructor(props) {\n   super(props);\n   this.state = { count: 0 };\n }\n\n render() {\n   return (\n     <div>\n       <p>Count: {this.state.count}</p>\n       <button onClick={() => this.setState({ count: this.state.count + 1 })}>\n         Increment\n       </button>\n     </div>\n   );\n }\n}\n```\n\n関数コンポーネントでのStateの例:\n\n```jsx\nfunction Counter() {\n const [count, setCount] = useState(0);\n\n return (\n   <div>\n     <p>Count: {count}</p>\n     <button onClick={() => setCount(count + 1)}>Increment</button>\n   </div>\n );\n}\n```\n\nコンポーネント、Props、Stateは、Reactアプリケーションの構築において非常に重要な役割を果たします。これらの概念を理解し、適切に活用することで、効率的でメンテナンス性の高いReactアプリケーションを開発することができます。\n',
		},
	])
);
export default articleRoutes;
