<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>

    <a href="dashboard">ke bagian dashboard</a>

    @extends('masterlayouts')
    @section('konten')
        <x-UI.card />

        <h1>pilih jenis kelamin</h1>
        <x-ui.form type="radio" name="jk" value="pria" label="pria"></x-ui.form>
        <x-ui.form type="radio" name="jk" value="wanita" label="wanita"></x-ui.form>
        <h1>keluhan</h1>
        <x-ui.form type="checkbox" name="jk" value="nyeri" label="nyeri"></x-ui.form>
        <x-ui.form type="checkbox" name="jk" value="lemas" label="lemas"></x-ui.form>
        <x-ui.form type="checkbox" name="jk" value="pusing" label="pusing"></x-ui.form>
        <x-ui.form type="checkbox" name="jk" value="Batuk" label="Batuk"></x-ui.form>
        <x-ui.form type="checkbox" name="jk" value="Demam" label="Demam"></x-ui.form>
        <x-ui.form type="checkbox" name="jk" value="malas" label="malas"></x-ui.form>

        <x-UI.button variant="danger" type="button">hapus</x-UI.button>
        <x-UI.button variant="warning" type="button">peringatan</x-UI.button>
        <x-UI.button variant="info" type="button">info</x-UI.button>
        <x-UI.button variant="dark" type="button">dark</x-UI.button>
    @endsection
</body>

</html>
