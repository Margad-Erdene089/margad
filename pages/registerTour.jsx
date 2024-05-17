import Header from "../components/Header";
import "tailwindcss/tailwind.css";
const contact = () => {
  return (
    <div>
      <Header />
      <div class="rounded-lg border border-gray-200 p-24">
        <div class="overflow-x-auto rounded-t-lg">
          <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm left-20 border">
            <thead class="ltr:text-left rtl:text-right">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 p-3 font-medium text-gray-900">
                  Тэмцээний нэр
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Шагналын сан
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Багийн хязгаар
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Бүртгүүлсэн багийн тоо
                </td>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Num аварга шалгаруулах
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  250000
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">16</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">12</td>

                <td class="whitespace-nowrap px-4 py-2 flex justify-end">
                  <a
                    href="bracket"
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    харах
                  </a>
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  CS аварга шалгаруулах
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">10000</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">8</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">4</td>

                <td class="whitespace-nowrap px-4 py-2 flex justify-end">
                  <a
                    href="/bracket"
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    харах
                  </a>
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Дүүргийн аварга шалгаруулах
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                  1000000
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">16</td>
                <td class="whitespace-nowrap px-4 py-2 text-gray-700">4</td>

                <td class="whitespace-nowrap px-4 py-2 flex justify-end">
                  <a
                    href="/bracket"
                    class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                  >
                    харах
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rounded-b-lg border-t border-gray-200 px-4 py-2 flex justify-center items-end content-end">
          <ol class="flex justify-end gap-1 text-xs font-medium"></ol>
        </div>
      </div>
    </div>
  );
};

export default contact;
