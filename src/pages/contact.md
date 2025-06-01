---
layout: base.njk
title: Contact 
permalink: /contact/
---

email me!

<form
  action="https://formspree.io/f/your-form-id"
  method="POST"
  class="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow"
>
  <h2 class="text-2xl font-semibold text-gray-800">Contact Me</h2>

  <div>
    <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      id="email"
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
    <textarea
      name="message"
      id="message"
      rows="5"
      required
      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
    ></textarea>
  </div>

  <!-- Optional anti-spam honeypot field -->
  <input type="text" name="_gotcha" style="display: none;" />

  <!-- Optional redirect -->
  <input type="hidden" name="_redirect" value="/thanks/" />

<button
type="submit"
class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700">
    Send Message
  </button>
</form>

