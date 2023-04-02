<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
     -->
    <script crossorigin src="{{ asset('js/react.development.js') }}"></script>
    <script crossorigin src="{{ asset('js/react-dom.development.js') }}"></script>
    <title>MATKA365</title>
</head>
<body>
    <div id="root"></div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>