import React from "react";

function Card({ children, className = "" }) {
    return (
        <div className={`border rounded-2xl shadow-sm p-4 bg-gray-100 ${className}`}>
            {children}
        </div>
    );
}

function Button({ children, variant = "primary" }) {
    const baseStyles = "px-4 py-2 text-sm font-medium rounded-xl";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
    };
    return <button className={`${baseStyles} ${variants[variant]}`}>{children}</button>;
}

export default function MinimalTheme() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-7xl mx-auto">
            <div className="text-center md:text-left">
                <h1 className="text-2xl font-bold text-blue-600 mb-4">Krishiv Piduri</h1>
                <div className="border-4 border-black inline-block p-8 mb-4">
                    <div className="text-4xl font-bold">Logo</div>
                </div>
                <p className="text-gray-600 mb-2">Minimal is a theme for GitHub Pages.</p>
            </div>

            <div className="space-y-4 text-sm text-gray-800">
                <p>
                    Text can be <strong>bold</strong>, <em>italic</em>, or <s>strikethrough</s>.
                </p>
                <p>
                    <a href="#" className="text-blue-600 hover:underline">
                        Link to another page.
                    </a>
                </p>
                <p>There should be whitespace between paragraphs.</p>
                <p>
                    There should be whitespace between paragraphs. We recommend
                    including a README, or a file with information about your project.
                </p>

                <h1 className="text-xl font-bold mt-6">Header 1</h1>
                <p>
                    This is a normal paragraph following a header. GitHub is a code
                    hosting platform for version control and collaboration. It lets you
                    and others work together on projects from anywhere.
                </p>

                <h2 className="text-lg font-semibold mt-4">Header 2</h2>
                <blockquote className="border-l-4 pl-4 italic text-gray-600">
                    This is a blockquote following a header.
                    <br />
                    <br />
                    When something is important enough, you do it even if the odds are not
                    in your favor.
                </blockquote>

                <h3 className="text-md font-semibold mt-4">Header 3</h3>
                <Card>
          <pre className="text-xs font-mono whitespace-pre-wrap">
{`// Javascript code with syntax highlighting.
var fun = function lang(1) {
  dateformat.i18n = require('./lang/' + 1)
  return true;
}`}
          </pre>
                </Card>

                <Card>
          <pre className="text-xs font-mono whitespace-pre-wrap">
{`# Ruby code with syntax highlighting.
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end`}
          </pre>
                </Card>

                <h4 className="text-sm font-bold mt-4">Header 4</h4>
                <ul className="list-disc list-inside">
                    <li>This is an unordered list following a header.</li>
                </ul>
            </div>
        </div>
    );
}
