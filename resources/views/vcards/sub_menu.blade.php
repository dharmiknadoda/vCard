<style>
    .bg-loder {
        background: rgba(11, 13, 19, 0.22);
        border-radius: 10px;
    }
</style>
<div class="lodar-my-sidebar">
    <div id="mySidebar" class="sidebar d-lg-block d-xl-block">
        <div class="d-flex d-none lodar-in w-100 justify-content-center align-items-center h-100">
            <i class="fa-solid fa-circle-notch fa-spin fa-spin-reverse"></i>
        </div>
    </div>
</div>
<script>
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        //   document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        //   document.getElementById("main").style.marginLeft= "0";
    }
</script>
