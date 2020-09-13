import React from "react";
import Link from "next/link";

export default function Index(){
    return(
        <div>
            <h1>Hola next.js</h1>
            <ul>
                <li>
                    <Link href="/blog">
                        <a>
                            Blog
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <a>
                            Contacto
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}