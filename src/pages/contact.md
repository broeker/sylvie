---
layout: base.njk
title: Contact 
permalink: /contact/
---


<div id="header" class="mt-16">
<h1 class="font-montserrat text-center text-sm mb-8 ">email me!</h1> 
</div>

<form
  action="https://formspree.io/f/your-form-id"
  method="POST"
  class="max-w-xl mx-auto space-y-6 bg-white p-6 mb-32"
>
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      class="mt-1 block w-full p-2 border border-gray-300  focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      class="mt-1 block w-full p-2  border border-gray-300  focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div>
    <label for="message" class="block p-2 text-sm font-medium text-gray-700">Message</label>
    <textarea
      name="message"
      id="message"
      rows="5"
      required
      class="mt-1 block w-full border border-gray-300  focus:border-blue-500 focus:ring-blue-500"
    ></textarea>
  </div>

  <!-- Optional anti-spam honeypot field -->
  <input type="text" name="_gotcha" style="display: none;" />

  <!-- Optional redirect -->
  <input type="hidden" name="_redirect" value="/thanks/" />

<button
type="submit"
class="w-auto bg-black text-white font-semibold py-2 px-4 rounded hove:bg-blue-700">
zoom zoom
  </button>
</form>

