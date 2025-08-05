import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, ExternalLink, BookOpen, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-200 font-mono">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-zinc-100">Alex Ellis</h1>
            <Image
              src="https://avatars2.githubusercontent.com/u/6358735?s=180&v=4"
              alt="Alex Ellis"
              width={100}
              height={100}
              className="rounded-lg"
            />
          </div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li>
                <Link href="#about" className="hover:text-zinc-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#products" className="hover:text-zinc-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-zinc-400 transition-colors">
                  OSS
                </Link>
              </li>
              <li>
                <Link href="#ebooks" className="hover:text-zinc-400 transition-colors">
                  eBooks
                </Link>
              </li>
              <li>
                <Link href="#blog" className="hover:text-zinc-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-zinc-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-8 border-t border-zinc-800 pt-4">
            <div className="flex space-x-4">
              <Link href="https://github.com/alexellis" className="text-zinc-400 hover:text-zinc-200 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/alexellisuk"
                className="text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/in/alexellisuk"
                className="text-zinc-400 hover:text-zinc-200 transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="space-y-16">
          <section id="about" className="space-y-4">
            <div className="border-l-2 border-zinc-700 pl-4">
              <h2 className="text-xl font-bold text-zinc-100">Putting developer experience first</h2>
            </div>
            <p className="leading-relaxed">
              I build premium software that is easy to operate, puts you back in control, and is portable between cloud and
              on-premises.
            </p>
            <p className="leading-relaxed">
              My focus is on improving the developer experience of serverless, microVMs like Firecracker, containers and
              Kubernetes.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Entrepreneur specialising in developer experience & marketing</li>
              <li>Well-known Open Source maintainer, respected expert on Cloud Native</li>
              <li>Accomplished conference-speaker and published author</li>
            </ul>
          </section>

          <section id="blog" className="space-y-6">
            <div className="border-l-2 border-zinc-700 pl-4">
              <h2 className="text-xl font-bold text-zinc-100">Recent Writing</h2>
            </div>

            <div className="space-y-8">
              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">Read my latest blog posts</h3>
                <p className="text-zinc-500 text-sm">2025-08-05</p>
                <p className="leading-relaxed">
                  Learn about Kubernetes, MicroVMs, Firecracker, Golang, Raspberry Pi,and self-hosting.
                </p>

                <Link
                href="https://blog.alexellis.io"
                className="inline-flex items-center space-x-2 border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800 transition-colors"
              >
                <BookOpen size={16} />
                <span>Read my latest posts</span>
              </Link>

              </div>

            </div>
          </section>

          <section id="products" className="space-y-6">
            <div className="border-l-2 border-zinc-700 pl-4">
              <h2 className="text-xl font-bold text-zinc-100">Products</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* OpenFaaS</h3>
                <p className="leading-relaxed">
                  Serverless Functions Made Simple. OpenFaaS makes it easy for developers to
                  deploy event-driven functions and microservices to Kubernetes without repetitive, boiler-plate coding.
                </p>
                <Link
                  href="https://www.openfaas.com/"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <span>openfaas.com</span>
                  <ExternalLink size={14} />
                </Link>
              </div>

              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* Actuated</h3>
                <p className="leading-relaxed">
                  Actuated provides a fast, secure, and hands-off solution for CI for GitHub Actions and GitLab CI. Jobs run in ephemeral microVMs, just bring your own server and actuated does the rest.
                </p>
                <Link
                  href="https://actuated.com"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <span>actuated.com</span>
                  <ExternalLink size={14} />
                </Link>
              </div>

              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* Inlets</h3>
                <p className="leading-relaxed">
                  With Inlets, you can expose your local HTTP and TCP services to the Internet through a VM or Kubernetes cluster. Unlike SaaS tunnels, there are no rate or connection limits.
                </p>
                <Link
                  href="https://inlets.dev"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <span>inlets.dev</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </section>

          <section id="projects" className="space-y-6">
            <div className="border-l-2 border-zinc-700 pl-4">
              <h2 className="text-xl font-bold text-zinc-100">Open Source Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* k3sup</h3>
                <p className="leading-relaxed">
                  Bootstrap Kubernetes with k3s over SSH in less than 1 minute. k3sup is a light-weight utility to get
                  from zero to KUBECONFIG with k3s on any Linux machine.
                </p>
                <Link
                  href="https://github.com/alexellis/k3sup"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <span>github.com/alexellis/k3sup</span>
                  <ExternalLink size={14} />
                </Link>
              </div>

              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* arkade</h3>
                <p className="leading-relaxed">
                  The open source marketplace for Kubernetes. arkade provides a curated collection of apps and CLIs that
                  you can install with a single command.
                </p>
                <Link
                  href="https://github.com/alexellis/arkade"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <span>github.com/alexellis/arkade</span>
                  <ExternalLink size={14} />
                </Link>
              </div>

              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* inlets-operator</h3>
                <p className="leading-relaxed">
                  Get real functioning TCP LoadBalancers for your Kubernetes services when running outside of public cloud.
                </p>
                <Link
                  href="https://github.com/inlets/inlets-operator"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <span>github.com/inlets/inlets-operator</span>
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Link
                href="https://github.com/sponsors/alexellis"
                className="inline-flex items-center space-x-2 border border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-800 transition-colors"
              >
                <Star size={16} />
                <span>Sponsor me on GitHub</span>
              </Link>
            </div>
          </section>

          <section id="ebooks" className="space-y-6">
            <div className="border-l-2 border-zinc-700 pl-4">
              <h2 className="text-xl font-bold text-zinc-100">eBooks</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* Serverless for Everyone Else</h3>
                <p className="leading-relaxed">
                  Learn how to build, deploy and run serverless functions with practical examples using OpenFaaS on your
                  own infrastructure.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <BookOpen size={14} />
                  <span>Get the eBook</span>
                </Link>
              </div>

              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* Everyday Golang</h3>
                <p className="leading-relaxed">
                  A practical guide to Go programming with real-world examples and techniques for building efficient
                  applications.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <BookOpen size={14} />
                  <span>Get the eBook</span>
                </Link>
              </div>

              <div className="space-y-2 border-t border-zinc-800 pt-4">
                <h3 className="text-lg font-bold text-zinc-100">* Netbooting the Raspberry Pi</h3>
                <p className="leading-relaxed">
                  A comprehensive guide to network booting Raspberry Pi devices, perfect for building clusters and
                  managing multiple devices.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center space-x-1 text-zinc-400 hover:text-zinc-200 transition-colors text-sm"
                >
                  <BookOpen size={14} />
                  <span>Get the eBook</span>
                </Link>
              </div>
            </div>
          </section>


          <section id="contact" className="space-y-4">
            <div className="border-l-2 border-zinc-700 pl-4">
              <h2 className="text-xl font-bold text-zinc-100">Contact</h2>
            </div>
            <p className="leading-relaxed">
              I'm available for advice on: developer experience, individual career development, speaking engagements, and workshops. 
            </p>
            <ul className="space-y-2 list-disc list-inside">
              
            <li><Link
              href="https://calendly.com/alexellis/"
              className="inline-flex items-center space-x-2 text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <Mail size={16} />
              <span>Pay for a consultation via Zoom</span>
            </Link>
            </li>


            <li>
            <Link
              href="mailto:alex@openfaas.com"
              className="inline-flex items-center space-x-2 text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              <Mail size={16} />
              <span>Email me: alex@openfaas.com</span>
            </Link>
            </li>
            </ul>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-zinc-800 text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Alex Ellis. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}


