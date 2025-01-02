<?php
$koneksi = mysqli_connect("localhost", "root", "", "explore");
if ($koneksi->connect_error) {
  die('Koneksi gagal: ' . $koneksi->connect_error);
}

function query($query)
{
  global $koneksi;
  $data = mysqli_query($koneksi, $query);
  $rows = [];
  while ($row = mysqli_fetch_assoc($data)) {
    $rows[] = $row;
  }
  return $rows;
}
