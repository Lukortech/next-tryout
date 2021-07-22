import Link from "next/link";

const NotFound = () => <div className="w-100 text-center d-flex flex-column">
    <h1>404!</h1>
    <p>How could this happen to meeeee...</p>

    <p>It seems you've been hit by, you've been struck by a missing page. Let's get you out of here!</p>
    <Link href="/">Take me home, country roads!</Link>
</div>

export default NotFound;