<?php

use Illuminate\Support\Facades\File;

if ( ! function_exists('deleteFiles') ) {
    function deleteFiles(...$files){
        foreach($files as $file){
            $filePath = public_path('uploads') . '/' . $file;
            File::delete($filePath);

        }
    }
}

if ( ! function_exists('createFiles') ) {
    function createFiles(array $namedFiles, $pretext = false)
    {

        $res = [];
        foreach ($namedFiles as $key => $value){
            if(!$value) continue;
            if($pretext)
                $fileNameArq = $key.'_'.time().'.'.$value->extension();
            else
                $fileNameArq = time().'.'.$value->extension();
            $value->move(public_path('uploads'), $fileNameArq);
            $res[$key] = $fileNameArq;
        }

        return $res;
    }
}
