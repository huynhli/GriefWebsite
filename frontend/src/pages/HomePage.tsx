export default function HomePage(){
	return (
		<div className={`flex flex-col items-center min-h-screen w-200 mx-auto py-20 bg-zinc-900`}>

			{/* About */}
			<div className={`w-150 p-3 mx-20 my-8`}>
				<h1 className={`text-3xl`}>About</h1>
				<div className={`h-1 my-3`}></div>
				<p>
					Grief is a bullet-hell boss rush that came from a weekend long game jam. <br/>
					Made in Unity by Liam Huynh, Tae Yeon Ha, and Andrew Wang, it's a short and small game.
				</p>
			</div>
		</div>
	)
}
