<script setup>
  //   import mailgo from "mailgo";

  import profilePicture from "$lib/public/profile picture.jpg";
  import logo from "$lib/public/logo.svg";

  //   mailgo({ dark: true });

  function copyEmail() {
    navigator.clipboard.writeText("aban0807");
    alert("Discord Username Copied!");
    window.open("https://discord.com/users/971036705937326182");
  }
</script>

<main>
  <div
    class="text-white items-center justify-center w-[50vw] h-[80%] flex flex-row gap-10 mt-14 max-[1000px]:flex-col max-[1000px]:mt-0"
  >
    <img
      src={profilePicture}
      alt=""
      class="w-[280px] h-[280px] rounded-full max-[1000px]:w-44 max-[1000px]:h-44"
    />
    <div class="max-[1000px]:items-center flex flex-col">
      <img src={logo} alt="" />

      <p
        class="max-[1000px]:text-sm max-[1000px]:w-[80vw] max-[1000px]:pt-3 pt-5"
      >
        I help creators and brands convert their vision to a highly valued
        personal brand and ultimately make them sales since 2021.
      </p>
      <br />
      <div
        class="flex gap-8 max-[1000px]:text-sm max-[1000px]:grid max-[1000px]:grid-cols-2"
      >
        <button
          class="flex flex-row gap-2 cursor-pointer socialButton"
          on:click|preventDefault={() => {
            copyEmail();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path
              d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"
            ></path>
          </svg>

          <p>Discord</p>
        </button>
        <a href="https://www.instagram.com/mohammed_aban777/" target="_blank">
          <div class="flex flex-row gap-2 cursor-pointer socialButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path
                d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
              ></path>
            </svg>
            <p>Instagram</p>
          </div>
        </a>
        <a href="https://twitter.com/Aban_777" target="_blank">
          <div class="flex flex-row gap-2 cursor-pointer socialButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path
                d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
              ></path>
            </svg>
            <p>Twitter</p>
          </div>
        </a>
        <a href="mailto:mohammedaban777@gmail.com">
          <div class="flex flex-row gap-2 cursor-pointer socialButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path
                d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"
              ></path>
            </svg>
            <p>Email</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</main>

<style scoped>
  .socialButton {
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0));
    transform: scale(1);
    transition: all 0.3s ease;
  }

  .socialButton:hover {
    filter: drop-shadow(0px 0px 5px rgba(255, 255, 255, 0.6));
    transform: scale(1.05);
  }
</style>
